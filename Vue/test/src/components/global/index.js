import UiInput from './UiInput.vue';
import UiFileInput from './UiFileInput.vue';
import UiCheckbox from './UiCheckbox.vue';
import UiRadio from './UiRadio.vue';
import UiButton from './UiButton.vue';

const components = [
	{ name: 'UiInput', component: UiInput },
	{ name: 'UiFileInput', component: UiFileInput },
	{ name: 'UiCheckbox', component: UiCheckbox },
	{ name: 'UiRadio', component: UiRadio },
	{ name: 'UiButton', component: UiButton },
];

export default {
	install(app)
	{
		components.forEach(({ name, component }) =>
		{
			app.component(name, component);
		});
	}
};
