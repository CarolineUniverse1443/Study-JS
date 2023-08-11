<template>
	<label class="ui-checkbox">
		<input
			:name="name"
			:checked="modelValue"
			type="checkbox"
			class="ui-checkbox__input"
			@change="onChange"
		>
		<span class="ui-checkbox__text">
			<slot />
		</span>
	</label>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
	name:
	{
		type: String,
		default: '',
	},
	modelValue: Boolean,
});

const onChange = () => emits('update:modelValue', !props.modelValue);
</script>

<style lang="scss">
.ui-checkbox
{
	display: flex;
	align-items: center;
	&:last-of-type
	{
		margin-bottom: 10px;
	}
}

.ui-checkbox__text
{
	font-size: 16px;
	line-height: 22px;
}

.ui-checkbox__input
{
	margin: 0;
	margin-right: 5px;
}
</style>
