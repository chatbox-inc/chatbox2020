<template>
  <section class="pt-8 pb-0 lg:pb-20">
    <div
      class="company-access px-5 sm:px-5 lg:p-0 lg:w-700px mx-auto text-black"
    >
      <h3 class="pb-10 text-xl lg:text-2xl font-bold text-center">
        アクセス
      </h3>
      <iframe
        title="GoogleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.139593377072!2d135.4896543087972!3d34.70165889810624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6898259708d%3A0x8990ab312217181f!2z44CSNTUzLTAwMDMg5aSn6Ziq5bqc5aSn6Ziq5biC56aP5bO25Yy656aP5bO277yW5LiB55uu77yR77yY4oiS77yR77yY!5e0!3m2!1sja!2sjp!4v1627885902611!5m2!1sja!2sjp"
        width="100%"
        height="400px"
        frameborder="0"
        style="border: 0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <div class="text-center">
        <a
          class="btn inline-block mt-8 relative cursor-pointer text-sm bg-primary px-6 py-4 rounded text-white text-center w-64 lg:text-lg transition ease-out duration-700 hover:opacity-75"
          href="https://www.google.com/maps/place/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEchatbox/@34.6944737,135.5152549,17z/data=!3m1!4b1!4m5!3m4!1s0x6000e723237eaaab:0x7d8bc4d8a57d77bc!8m2!3d34.6786564!4d135.5094156"
          target="_blank"
          rel="noopener"
        >
          Google Mapで開く
          <img
            class="btn__arrow w-8 inline absolute"
            src="@/assets/image/contact/keyboard_arrow_right-24px.svg"
            alt="arrow"
          />
        </a>
      </div>
      <table
        class="table-fixed my-10 lg:my-20 w-full text-left mx-auto text-sm lg:text-base"
      >
        <tbody>
          <tr class="leading-7 align-top">
            <th
              class="block w-full lg:py-2 pt-2 pl-2 lg:pl-20 lg:table-cell lg:w-1/3"
            >
              住所
            </th>
            <td class="block w-full lg:py-2 pb-2 pl-2 lg:table-cell lg:w-auto">
              <p>〒553-0003</p>
              <p>大阪府大阪市福島区福島 6-18-18</p>
              <p>WOB NISHIUMEDA #401</p>
            </td>
          </tr>
          <tr class="leading-7 align-top">
            <th class="block w-full pt-3 pl-2 lg:pl-20 lg:table-cell lg:w-1/3">
              電車でアクセス
            </th>
            <td class="block w-full lg:pt-3 pl-2 lg:table-cell lg:w-auto">
              <p>JR 大阪駅または福島駅から徒歩9分</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.company-access {
  tr {
    &:nth-child(odd) {
      background-color: #faf7f7;
    }
  }
}
.btn {
  &:hover {
    .btn__arrow {
      right: 0;
      transition: all 0.5s;
    }
  }

  &__arrow {
    top: 50%;
    transform: translateY(-50%);
    right: 3%;
    transition: all 0.5s;
  }
}
</style>
