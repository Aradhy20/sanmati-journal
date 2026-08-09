<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReviewEvaluationCompletedMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public int $tries = 3;
    public array $backoff = [10, 30, 90];
    public int $timeout = 60;

    /**
     * Internal Editor/Admin Notification Payload.
     */
    public function __construct(
        public string $editorName,
        public string $reviewerName,
        public string $trackingId,
        public string $paperTitle,
        public string $recommendation,
        public string $completedAt,
        public string $editorUrl
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Review Completed — Manuscript {$this->trackingId} | Sanmati Spectrum",
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.review-evaluation-completed',
            with: [
                'editorName'     => $this->editorName,
                'reviewerName'   => $this->reviewerName,
                'trackingId'     => $this->trackingId,
                'paperTitle'     => $this->paperTitle,
                'recommendation' => $this->recommendation,
                'completedAt'    => $this->completedAt,
                'editorUrl'      => $this->editorUrl,
            ]
        );
    }
}
