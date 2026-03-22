<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Queue\SerializesModels;

class PaperSubmissionMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(
        public string $paperTitle,
        public string $abstract,
        public string $keywords,
        public string $authorName,
        public string $authorEmail,
        public string $authorPhone,
        public string $institution,
        public string $subjectArea,
        public string $trackingId,
        public string $filePath,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "[New Submission] {$this->paperTitle} — {$this->trackingId}",
            replyTo: [
                new \Illuminate\Mail\Mailables\Address($this->authorEmail, $this->authorName),
            ]
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.paper-submission',
            with: [
                'paperTitle'   => $this->paperTitle,
                'abstract'     => $this->abstract,
                'keywords'     => $this->keywords,
                'authorName'   => $this->authorName,
                'authorEmail'  => $this->authorEmail,
                'authorPhone'  => $this->authorPhone,
                'institution'  => $this->institution,
                'subjectArea'  => $this->subjectArea,
                'trackingId'   => $this->trackingId,
                'submittedAt'  => now()->format('d M Y, h:i A'),
            ]
        );
    }

    public function attachments(): array
    {
        return [
            Attachment::fromStorageDisk('local', $this->filePath)
                ->as("Manuscript_{$this->trackingId}.pdf")
                ->withMime('application/pdf'),
        ];
    }
}
