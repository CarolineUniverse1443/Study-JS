<template>
	<button
		:class="{'ui-button--blue': isBlue}"
		class="ui-button"
	>
		<slot />
	</button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	isBlue:
	{
		type: Boolean,
		default: false,
	}
});
</script>

<style lang="scss">
.ui-button
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
