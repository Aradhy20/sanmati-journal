<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;

class InvalidStatusTransitionException extends Exception implements HttpExceptionInterface
{
    protected string $fromStatus;
    protected string $toStatus;

    public function __construct(string $fromStatus, string $toStatus, string $message = '')
    {
        $this->fromStatus = $fromStatus;
        $this->toStatus = $toStatus;

        $msg = $message ?: "Invalid status transition from '{$fromStatus}' to '{$toStatus}'.";
        parent::__construct($msg, 422);
    }

    public function getStatusCode(): int
    {
        return 422;
    }

    public function getHeaders(): array
    {
        return [];
    }

    /**
     * Render HTTP 422 JSON response for API or Inertia requests.
     */
    public function render($request): JsonResponse
    {
        return response()->json([
            'error'       => 'Invalid Status Transition',
            'message'     => $this->getMessage(),
            'from_status' => $this->fromStatus,
            'to_status'   => $this->toStatus,
        ], 422);
    }
}
