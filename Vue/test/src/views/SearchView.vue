<template>
	<div class="search-page">
		<h1 class="search-page__title">{{ title }}</h1>

		<div class="search-page__input">
			<input
				type="search"
				placeholder="Поиск продуктов"
				v-model="query"
			>
		</div>

		<!-- {{ reverseQuery }} -->

		<ul>
			<li
				v-for="product in queryProducts"
				:key="product"
			>
				{{ product.title }} : {{ product.price.toLocaleString()}}₽
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const title = 'Поиск';

const products = ref([
	{ title: 'Бананы', price: 148 },
	{ title: 'Яблоки', price: 30 },
	{ title: 'Хлеб', price: 28 },
	{ title: 'Сметана', price: 80 },
	{ title: 'Молоко', price: 90 },
	{ title: 'Снеки', price: 52 },
	{ title: 'Шоколад', price: 120 },
	{ title: 'Морковь', price: 20 },
]);

const query = ref('');

const queryProducts = computed(() =>
{
	let list = products.value;
	const search = query.value;

	if (search)
	{
		list = list.filter((product) =>
		{
			return product.title.indexOf(search) !== -1 || product.price.toString().indexOf(search) !== -1;
		});
	}

	return list;
});

// const products = ref([
// 	'Бананы',
// 	'Яблоки',
// 	'Хлеб',
// 	'Сметана',
// 	'Молоко',
// 	'Снеки',
// 	'Шоколад',
// 	'Морковь',
// ]);

// const queryProducts = computed(() =>
// {
// 	return products.value.filter((product) => product.indexOf(query.value) !== -1);
// });

// const reverseQuery = computed(() =>
// {
// 	return query.value.split('').reverse().join('');
// });
</script>

<style lang="scss">
.search-page
{
	text-align: left;
	padding: 20px;
}

.search-page__input
{
	max-width: 250px;
	font-size: 14px;
	margin-bottom: 20px;
	input
	{
		width: 100%;
		height: 30px;
		text-indent: 10px;
		border-radius: 10px;
		border: none;
		background-color: rgba(40,40,40, 0.07);
		color: black;
		outline: none;
		transition: all .2s ease;

		&:focus
		{
			box-shadow: 2px 2px 5px gray;
		}
	}
}

.search-page__title
{
	text-align: center;
}
</style>
