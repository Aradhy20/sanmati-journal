<?php $__env->startComponent('mail::message'); ?>
# ⚠️ Conflict of Interest Declared — <?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>


Dear **<?php echo new \Illuminate\Support\EncodedHtmlString($editorName); ?>**,

Reviewer **<?php echo new \Illuminate\Support\EncodedHtmlString($reviewerName); ?>** has declared a Conflict of Interest (COI) for assigned manuscript **<?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>**.

---

## 📋 Conflict Details

| | |
|---|---|
| **Tracking ID** | `<?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>` |
| **Manuscript Title** | <?php echo new \Illuminate\Support\EncodedHtmlString($paperTitle); ?> |
| **Reviewer Name** | <?php echo new \Illuminate\Support\EncodedHtmlString($reviewerName); ?> |
| **Declared On** | <?php echo new \Illuminate\Support\EncodedHtmlString($declaredAt); ?> |

### COI Reason Provided by Reviewer:
> <?php echo new \Illuminate\Support\EncodedHtmlString($coiReason); ?>


---

<?php if (isset($component)) { $__componentOriginal15a5e11357468b3880ae1300c3be6c4f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal15a5e11357468b3880ae1300c3be6c4f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => $__env->getContainer()->make(Illuminate\View\Factory::class)->make('mail::button'),'data' => ['url' => $editorUrl,'color' => 'error']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('mail::button'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($editorUrl),'color' => 'error']); ?>
Resolve Conflict in Editor Portal
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

Please review the conflict declaration and either re-invite the reviewer or decline the review assignment.

Warm Regards,  
**Editorial System**  
Sanmati Spectrum of Knowledge  
<?php echo $__env->renderComponent(); ?>
<?php /**PATH /Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My Drive/sanmati-journal/sanmati-core/resources/views/emails/reviewer-coi-declared.blade.php ENDPATH**/ ?>