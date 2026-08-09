<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReviewerInvitedMail extends Mailable implements ShouldQueue
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
        public ?string $articleType,
        public ?string $subjectArea,
        public ?string $dueAt,
        public string $portalUrl
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Review Invitation — Manuscript {$this->trackingId} | Sanmati Spectrum",
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.reviewer-invited',
            with: [
                'reviewerName' => $this->reviewerName,
                'trackingId'   => $this->trackingId,
                'paperTitle'   => $this->paperTitle,
                'articleType'  => $this->articleType ?? 'N/A',
                'subjectArea'  => $this->subjectArea ?? 'N/A',
                'dueAt'        => $this->dueAt ?? 'Not specified',
                'portalUrl'    => $this->portalUrl,
            ]
        );
    }
}
