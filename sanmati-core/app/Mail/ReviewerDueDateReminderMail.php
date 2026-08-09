<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReviewerDueDateReminderMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public int $tries = 3;
    public array $backoff = [10, 30, 90];
    public int $timeout = 60;

    /**
     * Explicit Double-Blind Whitelisted Payload.
     * ZERO Author Identity Exposed.
     */
    public function __construct(
        public string $reviewerName,
        public string $trackingId,
        public string $paperTitle,
        public string $dueAt,
        public string $portalUrl
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Review Due Date Reminder — Manuscript {$this->trackingId} | Sanmati Spectrum",
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.reviewer-due-reminder',
            with: [
                'reviewerName' => $this->reviewerName,
                'trackingId'   => $this->trackingId,
                'paperTitle'   => $this->paperTitle,
                'dueAt'        => $this->dueAt,
                'portalUrl'    => $this->portalUrl,
            ]
        );
    }
}
