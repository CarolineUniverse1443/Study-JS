<template>
	<div class="review-form">
		<form @submit.prevent.stop="submit">
			<UiInput
				v-model="review.author"
				placeholder="Как вас зовут?"
			/>

			<UiInput
				type="textarea"
				v-model="review.text"
				placeholder="Расскажите свое мнение, пожалуйста"
			/>

			<div class="review-form__rating">
				<h2 class="review-form__subtitle">Оценка</h2>
				<UiCheckbox />
				<div
					v-for="star in stars"
					:key="star"
					class="review-form__star"
				>
					<input
						type="checkbox"
						v-model="review.stars"
						:true-value="star"
						:false-value="null"
						:id="star"
						class="input__checkbox"
					>
					<label class="review-form__star-title" :for="star">
						{{ star }}
					</label>
				</div>
			</div>

			<UiFileInput />

			<!-- <div class="review-form__file">
				<label for="formFile" class="review-form__file-label">Фото</label>

				<div class="review-form__file-wr">
					<UiFileInput />
					<input
						type="file"
						id="formFile"
						class="review-form__file-input"
						@change="uploadFile"
					>

					<img
						:src="previewFilePath"
						v-if="previewFilePath !== '#'"
						class="review-form__file-preview"
					>
				</div>
			</div> -->

			<div class="review-form__rec">
				<UiRadio />
				<div class="review-form__radio">
					<input
						v-model="review.isRecommended"
						:value="false"
						class="review-form__radio-input"
						type="radio"
						id="notrecommended"
						name="opinion"
					>
					<label class="review-form__radio-label" for="notrecommended">
						Не советую
					</label>
				</div>
				<div class="review-form__radio">
					<input
						v-model="review.isRecommended"
						:value="true"
						class="review-form__radio-input"
						type="radio"
						id="recommmended"
						name="opinion"
					>
					<label class="review-form__radio-label" for="recommmended">
						Советую
					</label>
				</div>
			</div>

			<UiButton isBlue>
				Отправить!
			</UiButton>

		</form>
	</div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import axios from 'axios';

const review = reactive({
	author: '',
	stars: null,
	text: '',
	photo: null,
	isRecommended: true
});

const stars = [1, 2, 3, 4, 5];

const submit = () =>
{
	console.log('submit');
	axios.post('/api/review', review,
		{
			headers:
			{
				'Content-Type': 'multipart/form-data'
			}
		}
	)
		.then((res) =>
		{
			console.log(res);
		})
		.catch((err) =>
		{
			console.log(err);
		})
		.finally(() =>
		{
			console.log('status code 200 OK');
		});
};
</script>

<style lang="scss">
.review-form__subtitle
{
	margin: 0;
	margin-bottom: 10px;
}

.review-form__rating
{
	margin-bottom: 20px;
}

.review-form__star
{
	display: flex;
	align-items: center;
	&:last-of-type
	{
		margin-bottom: 10px;
	}
}

.review-form__star-title
{
	font-size: 16px;
	line-height: 22px;
}

.input__checkbox
{
	margin: 0;
	margin-right: 5px;
}

.review-form__rec
{
	margin-bottom: 30px;
}
</style>
