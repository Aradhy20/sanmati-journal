<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class AuthorConfirmationMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $authorName,
        public string $paperTitle,
        public string $trackingId,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Submission Received — {$this->trackingId} | Sanmati Spectrum",
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.author-confirmation',
            with: [
                'authorName'  => $this->authorName,
                'paperTitle'  => $this->paperTitle,
                'trackingId'  => $this->trackingId,
                'submittedAt' => now()->format('d M Y, h:i A'),
            ]
        );
    }
}
