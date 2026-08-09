<?php $__env->startComponent('mail::message'); ?>
# ✅ Submission Received — <?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>


Dear **<?php echo new \Illuminate\Support\EncodedHtmlString($authorName); ?>**,

Thank you for submitting your manuscript to **Sanmati Spectrum of Knowledge**. We have successfully received your paper and it is now under preliminary review.

---

## 📋 Submission Summary

| | |
|---|---|
| **Tracking ID** | `<?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>` |
| **Paper Title** | <?php echo new \Illuminate\Support\EncodedHtmlString($paperTitle); ?> |
| **Received On** | <?php echo new \Illuminate\Support\EncodedHtmlString($submittedAt); ?> |

---

## 📬 What Happens Next?

1. **Initial Screening** — Our editorial team will check for completeness and scope fit within **3–5 business days**.
2. **Double-Blind Peer Review** — After screening, your paper enters the peer-review process with domain experts.
3. **Decision** — You will receive an acceptance, revision request, or rejection notice by email.

---

> Please keep your **Tracking ID `<?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>`** safe. You may need it for any future correspondence with our editorial office.

For queries, email us at [sanmatijournal@gmail.com](mailto:sanmatijournal@gmail.com) or call **+91 8979782949**.

<?php if (isset($component)) { $__componentOriginal15a5e11357468b3880ae1300c3be6c4f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal15a5e11357468b3880ae1300c3be6c4f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => $__env->getContainer()->make(Illuminate\View\Factory::class)->make('mail::button'),'data' => ['url' => 'https://sanmatijournal.in/submission-guidelines','color' => 'primary']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('mail::button'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => 'https://sanmatijournal.in/submission-guidelines','color' => 'primary']); ?>
View Submission Guidelines
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal15a5e11357468b3880ae1300c3be6c4f)): ?>
<?php $attributes = $__attributesOriginal15a5e11357468b3880ae1300c3be6c4f; ?>
<?php unset($__attributesOriginal15a5e11357468b3880ae1300c3be6c4f); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal15a5e11357468b3880ae1300c3be6c4f)): ?>
<?php $component = $__componentOriginal15a5e11357468b3880ae1300c3be6c4f; ?>
<?php unset($__componentOriginal15a5e11357468b3880ae1300c3be6c4f); ?>
<?php endif; ?>

Warm Regards,
**Editorial Team**
Sanmati Spectrum of Knowledge
ISSN: 3108-1819
<?php echo $__env->renderComponent(); ?>
<?php /**PATH /Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My Drive/sanmati-journal/sanmati-core/resources/views/emails/author-confirmation.blade.php ENDPATH**/ ?>