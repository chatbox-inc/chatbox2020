<template>
  <div>
    <a href="#" class="lg:hidden btn-large-sp mx-auto inline-block">
      <div class="flex items-center bg-white">
        <img
          :src="image"
          class="btn-large-spImg object-cover"
          alt="イメージ画像"
        />
        <p class="text-primary mx-auto text-sm font-bold">
          {{ text }}
        </p>
        <img src="" alt="" />
      </div>
    </a>
    <a
      href="#"
      class="hidden c-button lg:block mx-auto btn-large-pc lg:hover:btn-large-pressed inline-block"
    >
      <div class="flex items-center bg-white">
        <img
          :src="image"
          class="btn-large-pcImg object-cover"
          alt="イメージ画像"
        />
        <p class="text-primary mx-auto text-2xl font-bold">
          {{ text }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.c-button {
  width: 800px;
  border: 1px solid #c3504f;
  box-shadow: 7px 7px 0 0 #c3504f;
  transition: all 0.3s ease-in;
  background-color: #fff;
  padding: 0;

  &:hover {
    transform: translate(4px, 4px);
    box-shadow: 3px 3px 0 0 #c3504f;
    transition: all 0.3s ease-in-out;
  }
}

.btn-large-sp {
  width: 100%;
  background-color: #c3504f;
  padding: 15px 20px;
}

.btn-large-pcImg {
  width: 30%;
  height: 140px;
}

.btn-large-spImg {
  width: 120px;
  height: 80px;
}
</style>
