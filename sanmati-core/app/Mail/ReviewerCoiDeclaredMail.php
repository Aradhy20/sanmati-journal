<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReviewerCoiDeclaredMail extends Mailable implements ShouldQueue
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
        public string $coiReason,
        public string $declaredAt,
        public string $editorUrl
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "COI Declared — Manuscript {$this->trackingId} | Sanmati Spectrum",
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.reviewer-coi-declared',
            with: [
                'editorName'   => $this->editorName,
                'reviewerName' => $this->reviewerName,
                'trackingId'   => $this->trackingId,
                'paperTitle'   => $this->paperTitle,
                'coiReason'    => $this->coiReason,
                'declaredAt'   => $this->declaredAt,
                'editorUrl'    => $this->editorUrl,
            ]
        );
    }
}
