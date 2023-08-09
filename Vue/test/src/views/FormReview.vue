<template>
	<div class="review-page">
		<h1 class="review-page__title">{{ title }}</h1>

		<form @submit.prevent.stop="submit">
			<input
				type="text"
				v-model="review.author"
				placeholder="Как вас зовут?"
				class="input__field"
			>

			<textarea
				type="text"
				v-model="review.text"
				class="
					input__field input__field--textarea
				"
				placeholder="Расскажите свое мнение"
			>
			</textarea>

			<div class="review-page__rating">
				<h3 class="review-page__subtitle">Оценка</h3>

				<div
					v-for="star in stars"
					:key="star"
					class="review-page__star"
				>
					<input
						type="checkbox"
						v-model="review.stars"
						:true-value="star"
						:false-value="null"
						:id="star"
						class="input__checkbox"
					>
					<label class="review-page__star-title" :for="star">
						{{ star }}
					</label>
				</div>
			</div>

			<div class="review-page__file">
				<label for="formFile" class="review-page__file-label">Фото</label>

				<div class="review-page__file-wr">
					<input
						type="file"
						id="formFile"
						class="review-page__file-input"
						@change="uploadFile"
					>

					<img
						:src="previewFilePath"
						v-if="previewFilePath !== '#'"
						class="review-page__file-preview"
					>
				</div>
			</div>

			<div class="review-page__rec">
				<div class="review-page__radio">
					<input
						v-model="review.isRecommended"
						:value="false"
						class="review-page__radio-input"
						type="radio"
						id="notrecommended"
						name="opinion"
					>
					<label class="review-page__radio-label" for="notrecommended">
						Не советую
					</label>
				</div>
				<div class="review-page__radio">
					<input
						v-model="review.isRecommended"
						:value="true"
						class="review-page__radio-input"
						type="radio"
						id="recommmended"
						name="opinion"
					>
					<label class="review-page__radio-label" for="recommmended">
						Советую
					</label>
				</div>
			</div>

			<button class="button button--blue">
				Отправить
			</button>
		</form>
	</div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';
import axios from 'axios';

const title = 'Оставить отзыв';

const review = reactive({
	author: '',
	stars: null,
	text: '',
	photo: null,
	isRecommended: true
});

const stars = [1, 2, 3, 4, 5];

const previewFilePath = computed(() =>
{
	if (review.photo)
		return URL.createObjectURL(review.photo);

	return '#';
});

const uploadFile = (e) =>
{
	console.log(e.target.files[0]);
	review.photo = e.target.files[0];
};

const submit = () =>
{
	alert('submit');
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
.review-page
{
	text-align: left;
	padding: 20px;
	font-family: Arial;
	margin: 0 auto;
	max-width: 768px;
}

.review-page__title
{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
}

.review-page__subtitle
{
	margin: 0;
	margin-bottom: 10px;
}

.input__field
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

.review-page__rating
{
	margin-bottom: 20px;
}

.review-page__star
{
	display: flex;
	align-items: center;
	&:last-of-type
	{
		margin-bottom: 10px;
	}
}

.review-page__star-title
{
	font-size: 16px;
	line-height: 22px;
}

.input__checkbox
{
	margin: 0;
	margin-right: 5px;
}

.review-page__file
{
	margin-bottom: 20px;
}

.review-page__file-label
{
	margin-bottom: 5px;
	display: block;
}

.review-page__file-wr
{
	display: flex;
	flex-direction: column;
}

.review-page__file-input
{
	margin-bottom: 10px;
}

.review-page__file-preview
{
	width: 100%;
	max-width: 384px;
	object-fit: cover;
	display: block;
}

.review-page__rec
{
	margin-bottom: 30px;
}

.button
{
	white-space: nowrap;
	cursor: pointer;
	font-size: 18px;
	line-height: 22px;

	&:focus { outline: unset; }

	&--blue
	{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 30px;
		height: 38px;
		width: 100%;
		width: fit-content;
		background: #3772FE;
		border-radius: 10px;
		border: unset;
		color: #fff;
		transition: all .2s ease;

		&:hover { opacity: .8; }
		&:active { transform: scale(0.95); }
	}
}
</style>
