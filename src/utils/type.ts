/* interface */
export interface ICom {
  id: string
  name: string
  value: string
  active: boolean //选中状态
  componentName: string // 对应左侧组件的componentName
  setName: string // 对应左侧组件的setName
  style: { title?: string }
}
