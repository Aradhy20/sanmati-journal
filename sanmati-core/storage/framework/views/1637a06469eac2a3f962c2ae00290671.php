<?php $__env->startComponent('mail::message'); ?>
# 📄 Peer Review Invitation — <?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>


Dear **<?php echo new \Illuminate\Support\EncodedHtmlString($reviewerName); ?>**,

You have been invited to serve as a peer reviewer for a manuscript submitted to **Sanmati Spectrum of Knowledge**.

---

## 📋 Manuscript Information

| | |
|---|---|
| **Tracking ID** | `<?php echo new \Illuminate\Support\EncodedHtmlString($trackingId); ?>` |
| **Title** | <?php echo new \Illuminate\Support\EncodedHtmlString($paperTitle); ?> |
| **Article Type** | <?php echo new \Illuminate\Support\EncodedHtmlString($articleType); ?> |
| **Subject Area** | <?php echo new \Illuminate\Support\EncodedHtmlString($subjectArea); ?> |
| **Review Due Date** | <?php echo new \Illuminate\Support\EncodedHtmlString($dueAt); ?> |

---

> **Double-Blind Peer Review Policy**: This journal operates under a strict double-blind peer review policy. Author identities have been removed from manuscript payloads to ensure unbiased evaluation.

<?php if (isset($component)) { $__componentOriginal15a5e11357468b3880ae1300c3be6c4f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal15a5e11357468b3880ae1300c3be6c4f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => $__env->getContainer()->make(Illuminate\View\Factory::class)->make('mail::button'),'data' => ['url' => $portalUrl,'color' => 'primary']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('mail::button'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['url' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($portalUrl),'color' => 'primary']); ?>
Access Reviewer Portal
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

Please log into your reviewer dashboard to accept or decline this invitation.

Warm Regards,  
**Editorial Office**  
Sanmati Spectrum of Knowledge  
ISSN: 3108-1819  
<?php echo $__env->renderComponent(); ?>
<?php /**PATH /Users/aradhyjain/Library/CloudStorage/GoogleDrive-jainaradhy01@gmail.com/My Drive/sanmati-journal/sanmati-core/resources/views/emails/reviewer-invited.blade.php ENDPATH**/ ?>