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

			<UiFileInput
				v-model="review.photo"
				label="Фоточка"
			/>

			<div class="review-form__rec">
				<UiRadio
					v-model="review.isRecommended"
					name="opinion"
					code="false"
				>
					Не советую
				</UiRadio>

				<UiRadio
					v-model="review.isRecommended"
					name="opinion"
					code="true"
				>
					Советую
				</UiRadio>
			</div>

			<UiCheckbox
				v-model="review.soul"
				name="rate"
			>
				Согласен продать дущу
			</UiCheckbox>

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
	soul: false,
	text: '',
	photo: null,
	isRecommended: 'true',
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
	margin-bottom: 20px;
}
</style>
