<template>
	<label class="ui-input">
		<textarea
			v-if="type == 'textarea'"
			:type="type"
			v-model="value"
			:placeholder="placeholder"
			class="ui-input__field ui-input__field--textarea"
		/>
		<input
			v-else
			:type="type"
			v-model="value"
			:placeholder="placeholder"
			class="ui-input__field"
		>
	</label>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
	modelValue: String,
	placeholder:
	{
		type: String,
		default: '',
	},
	type:
	{
		type: String,
		default: 'text',
		validator: (val) =>
			[
				'text',
				'password',
				'tel',
				'email',
				'textarea',
				'search'
			].includes(val)
	}
});

const value = ref(props.modelValue);

watch(value, () =>
{
	emits('update:modelValue', value);
});
</script>

<style lang="scss">
.ui-input__field
{
	font-family: Arial;
	width: calc(100% - 20px);
	max-height: 30px;
	border-radius: 10px;
	margin-bottom: 10px;
	padding: 10px;
	font-size: 14px;
	line-height: 19px;
	border: none;
	background-color: rgba(40,40,40, 0.07);
	color: black;
	outline: none;
	transition: all .2s ease;

	&:focus
	{
		box-shadow: 2px 2px 5px gray;
	}

	&--textarea
	{
		resize: none;
		min-height: 90px;
		display: block;
		margin-bottom: 20px;
	}
}
</style>
