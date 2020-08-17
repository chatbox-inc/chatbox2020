<template>
  <section class="py-8 lg:py-24">
    <div class="company-about px-5 lg:p-0 lg:w-700px mx-auto text-black">
      <h3 class="text-xl lg:text-2xl font-bold text-center">
        chatboxについて
      </h3>
      <img
        src="@/assets/image/company/about_image.png"
        alt="会社イメージ"
        class="my-12 lg:my-16 w-full h-auto"
      />
      <table class="table-fixed w-full text-left mx-auto text-sm lg:text-base">
        <tbody>
          <tr class="leading-6 lg:leading-10">
            <th
              class="block w-full pt-2 pl-2 lg:pt-0 lg:pl-20 lg:table-cell lg:w-1/3"
            >
              会社名
            </th>
            <td class="block w-full pl-2 pb-2 lg:pb-0 lg:table-cell lg:w-auto">
              株式会社 chatbox
            </td>
          </tr>
          <tr class="leading-6 lg:leading-10">
            <th
              class="block w-full pt-2 pl-2 lg:pt-0 lg:pl-20 lg:table-cell lg:w-1/3"
            >
              代表
            </th>
            <td class="block w-full pl-2 pb-2 lg:pb-0 lg:table-cell lg:w-auto">
              後藤 知宏
            </td>
          </tr>
          <tr class="leading-6 lg:leading-10">
            <th
              class="block w-full pt-2 pl-2 lg:pt-0 lg:pl-20 lg:table-cell lg:w-1/3"
            >
              設立
            </th>
            <td class="block w-full pl-2 pb-2 lg:pb-0 lg:table-cell lg:w-auto">
              2014年10月02日
            </td>
          </tr>
          <tr class="leading-6 lg:leading-10">
            <th
              class="block w-full pt-2 pl-2 lg:pt-0 lg:pl-20 lg:table-cell lg:w-1/3"
            >
              事業内容
            </th>
            <td class="block w-full pl-2 pb-2 lg:pb-0 lg:table-cell lg:w-auto">
              Web制作 / IT教育
            </td>
          </tr>
          <tr class="leading-6 lg:leading-10">
            <th
              class="block w-full pt-2 pl-2 lg:pt-0 lg:pl-20 lg:table-cell lg:w-1/3"
            >
              従業員数
            </th>
            <td class="block w-full pl-2 pb-2 lg:pb-0 lg:table-cell lg:w-auto">
              30名(アルバイト含む)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="scss" scoped>
.company-about {
  tr {
    &:nth-child(odd) {
      background-color: #faf7f7;
    }
  }
}
</style>
