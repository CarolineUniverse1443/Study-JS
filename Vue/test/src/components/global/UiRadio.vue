<template>
	<label class="ui-radio">
		<input
			:name="name"
			:value="code"
			:checked="modelValue === code"
			class="ui-radio__input"
			type="radio"
			@change="onChange"
		>
		<span class="ui-radio__text">
			<slot />
		</span>
	</label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
	name:
	{
		type: String,
		default: '',
	},
	code:
	{
		type: String,
		default: '',
	},
	modelValue:
	{
		type: String,
		default: '',
	}
});

const emits = defineEmits(['update:modelValue']);

const onChange = () => emits('update:modelValue', props.code);
</script>

<style lang="scss">
</style>
