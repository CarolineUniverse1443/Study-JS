<template>
	<div class="ui-file-input">
		<label for="formFile" class="ui-file-input__label">{{ label }}</label>

		<div class="ui-file-input__wr">
			<input
				type="file"
				id="formFile"
				class="ui-file-input__field"
				@change="uploadFile"
			>

			<img
				:src="previewFilePath"
				v-if="previewFilePath !== '#'"
				class="ui-file-input__preview"
			>
		</div>
	</div>
</template>

<script setup>
import { computed, defineProps, defineEmits, watch, ref } from 'vue';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
	modelValue: Array,
	label: String,
});

const value = ref(props.modelValue);

const previewFilePath = computed(() =>
{
	if (value.value)
		return URL.createObjectURL(value.value);

	return '#';
});

const uploadFile = (e) =>
{
	const [file] = e.target.files;
	value.value = file;
};

watch(value, () =>
{
	emits('update:modelValue', value.value);
});
</script>

<style lang="scss">
.ui-file-input
{
	margin-bottom: 20px;
}

.ui-file-input__label
{
	margin-bottom: 5px;
	display: block;
}

.ui-file-input__wr
{
	display: flex;
	flex-direction: column;
}

.ui-file-input__input
{
	margin-bottom: 10px;
}

.ui-file-input__preview
{
	width: 100%;
	max-width: 384px;
	object-fit: cover;
	display: block;
}
</style>
