<svelte:head>
	<title>FormValidation • on() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">on()</h1>
    <h2 class="f4 fw4 tc">Listen on particular event.</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`on(event: String, func: Function): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 mb3 pl3 lh-copy">
            <li><code>event</code> <sup>*</sup> — The event name</li>
            <li><code>func</code> <sup>*</sup> — The event handler.</li>
        </ul>
<SampleCode lang="javascript" code={`
const invalidFieldHandler = function(field) {
    // field is name of invalid field
    ...
};

fv.on('core.field.invalid', invalidFieldHandler);
`} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/off">off() method</PrevButton>
            <NextButton target="/guide/api/register-filter">registerFilter() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
