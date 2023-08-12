import { ref } from 'vue'

// 按照惯例，组合式函数名以“use”开头
export default function usePage(callback) {
  // 被组合式函数封装和管理的状态
  const currentPage = ref(1)
  const pageSize = ref(20)
  const total = ref(100)

  // 组合式函数可以随时更改其状态。
  function pageSizeChange(page) {
    pageSize.value = page;
    callback()
  }
  // 组合式函数可以随时更改其状态。
  function currentPageChange(index) {
    currentPage.value = index;
    callback()
  }
  // 通过返回值暴露所管理的状态
  return { currentPage,pageSize,total,pageSizeChange,currentPageChange }
}
