<template>
	<div class="review-page">
		<h1 class="review-page__title">{{ title }}</h1>

		<ReviewForm />
	</div>
</template>

<script setup>
import ReviewForm from '@/components/ReviewForm.vue';
const title = 'Оставить отзыв';
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
</style>
