<template>
	<div class="ui-file-input">
		<label for="formFile" class="ui-file-input__label">Фоточка</label>

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
import { computed } from 'vue';
const previewFilePath = computed(() =>
{
	// if (review.photo)
	// 	return URL.createObjectURL(review.photo);

	return '#';
});

const uploadFile = (e) =>
{
	console.log(e.target.files[0]);
	// review.photo = e.target.files[0];
};
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
