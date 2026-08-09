<?php $__env->startComponent('mail::message'); ?>
# ✅ Review Evaluation Submitted — <?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>


Dear **<?php echo new \Illuminate\Support\EncodedHtmlString($editorName); ?>**,

Reviewer **<?php echo new \Illuminate\Support\EncodedHtmlString($reviewerName); ?>** has completed and finalized their peer-review evaluation for manuscript **<?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>**.

---

## 📋 Evaluation Summary

| | |
|---|---|
| **Tracking ID** | `<?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>` |
| **Manuscript Title** | <?php echo new \Illuminate\Support\EncodedHtmlString($paperTitle); ?> |
| **Reviewer Name** | <?php echo new \Illuminate\Support\EncodedHtmlString($reviewerName); ?> |
| **Recommendation** | **<?php echo new \Illuminate\Support\EncodedHtmlString(strtoupper($recommendation)); ?>** |
| **Completed On** | <?php echo new \Illuminate\Support\EncodedHtmlString($completedAt); ?> |

---

<?php if (isset($component)) { $__componentOriginal15a5e11357468b3880ae1300c3be6c4f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal15a5e11357468b3880ae1300c3be6c4f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => $__env->getContainer()->make(Illuminate\View\Factory::class)->make('mail::button'),'data' => ['url' => $editorUrl,'color' => 'primary']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('mail::button'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($editorUrl),'color' => 'primary']); ?>
View Full Evaluation in Editor Portal
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

Log into your editor dashboard to read the full evaluation scores, detailed reviewer comments, and confidential editor notes.

Warm Regards,  
**Editorial System**  
Sanmati Spectrum of Knowledge  
<?php echo $__env->renderComponent(); ?>
<?php /**PATH /Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My Drive/sanmati-journal/sanmati-core/resources/views/emails/review-evaluation-completed.blade.php ENDPATH**/ ?>