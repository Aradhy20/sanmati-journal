<?php $__env->startComponent('mail::message'); ?>
# 📄 New Manuscript Received

A new paper has been submitted to **Sanmati Spectrum of Knowledge**. The author's manuscript is attached to this email.

---

## 📋 Paper Details

| Field | Details |
|--|--|
| **Tracking ID** | <?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?> |
| **Paper Title** | <?php echo new \Illuminate\Support\EncodedHtmlString($paperTitle); ?> |
| **Subject Area** | <?php echo new \Illuminate\Support\EncodedHtmlString($subjectArea); ?> |
| **Keywords** | <?php echo new \Illuminate\Support\EncodedHtmlString($keywords ?: 'Not provided'); ?> |
| **Submitted On** | <?php echo new \Illuminate\Support\EncodedHtmlString($submittedAt); ?> |

---

## 👤 Author Information

| Field | Details |
|--|--|
| **Name** | <?php echo new \Illuminate\Support\EncodedHtmlString($authorName); ?> |
| **Email** | <?php echo new \Illuminate\Support\EncodedHtmlString($authorEmail); ?> |
| **Phone** | <?php echo new \Illuminate\Support\EncodedHtmlString($authorPhone ?: 'Not provided'); ?> |
| **Institution** | <?php echo new \Illuminate\Support\EncodedHtmlString($institution ?: 'Not provided'); ?> |

---

## 📝 Abstract

<?php echo new \Illuminate\Support\EncodedHtmlString($abstract); ?>


---

<?php if (isset($component)) { $__componentOriginal15a5e11357468b3880ae1300c3be6c4f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal15a5e11357468b3880ae1300c3be6c4f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => $__env->getContainer()->make(Illuminate\View\Factory::class)->make('mail::button'),'data' => ['url' => config('app.url') . '/admin','color' => 'primary']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('mail::button'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute(config('app.url') . '/admin'),'color' => 'primary']); ?>
Open Editorial Dashboard
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

> **Note:** The PDF manuscript is attached to this email as `Manuscript_<?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>.pdf`.
> Please check the spam folder if you do not see the attachment.

---

**Sanmati Spectrum of Knowledge**
ISSN: 3108-1819 · sanmatijournal@gmail.com
<?php echo $__env->renderComponent(); ?>
<?php /**PATH /Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My Drive/sanmati-journal/sanmati-core/resources/views/emails/paper-submission.blade.php ENDPATH**/ ?>