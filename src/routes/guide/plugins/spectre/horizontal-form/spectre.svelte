<SpectreLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="form-horizontal">
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Product name</label>
            </div>
            <div class="col-5">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="name" />
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Price</label>
            </div>
            <div class="col-5">
                <div class="input-group has-icon-right">
                    <span class="input-group-addon">$</span>
                    <input type="text" class="form-input" name="price" />
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Size</label>
            </div>
            <div class="col-6">
                <div>
                    <label class="form-checkbox">
                        <input type="checkbox" name="size[]" value="s" />
                        <i class="form-icon"></i> S
                    </label>
                </div>
                <div>
                    <label class="form-checkbox">
                        <input type="checkbox" name="size[]" value="m" />
                        <i class="form-icon"></i> M
                    </label>
                </div>
                <div>
                    <label class="form-checkbox">
                        <input type="checkbox" name="size[]" value="l" />
                        <i class="form-icon"></i> L
                    </label>
                </div>
                <div>
                    <label class="form-checkbox">
                        <input type="checkbox" name="size[]" value="xl" />
                        <i class="form-icon"></i> XL
                    </label>
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Available in store</label>
            </div>
            <div class="col-6">
                <div>
                    <label class="form-radio">
                        <input type="radio" name="availability" value="yes" />
                        <i class="form-icon"></i> Yes
                    </label>
                </div>
                <div>
                    <label class="form-radio">
                        <input type="radio" name="availability" value="no" />
                        <i class="form-icon"></i> No
                    </label>
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3"></div>
            <div class="col-9">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</SpectreLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Spectre from 'formvalidation/dist/es6/plugins/Spectre';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './spectre.programmatic';
import SpectreLayout from '../../../../../components/demo/SpectreLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The name must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The name can only consist of alphabetical, number and underscore'
                    }
                }
            },
            price: {
                validators: {
                    notEmpty: {
                        message: 'The price is required'
                    },
                    numeric: {
                        message: 'The price must be a number'
                    }
                }
            },
            'size[]': {
                validators: {
                    notEmpty: {
                        message: 'The size is required'
                    }
                }
            },
            availability: {
                validators: {
                    notEmpty: {
                        message: 'The availability option is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            spectre: new Spectre(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'form-icon icon icon-check',
                invalid: 'form-icon icon icon-cross',
                validating: 'form-icon loading',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/spectre/horizontal-form/spectre',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
