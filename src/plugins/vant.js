import Vue from 'vue'
// import 'vant/lib/index.css'
import {
  /* 基础组件 */
  Button,
  Cell,
  CellGroup,
  Icon,
  Image,
  Col,
  Row,
  Popup,
  Toast,
  /* 表单组件 */
  Calendar,
  DatetimePicker,
  Form,
  Checkbox,
  CheckboxGroup,
  Field,
  Picker,
  Radio,
  RadioGroup,
  Search,
  /* 导航组件 */
  Grid,
  GridItem,
  IndexBar,
  IndexAnchor,
  NavBar,
  Pagination,
  Sidebar,
  SidebarItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  TreeSelect,
  Uploader,
  /* 反馈组件 */
  Dialog,
  DropdownMenu,
  DropdownItem,
  Loading,
  Notify,
  Overlay,
  PullRefresh,
  SwipeCell,
  /* 展示组件 */
  Collapse,
  CollapseItem,
  Divider,
  Empty,
  ImagePreview,
  Lazyload,
  List,
  NoticeBar,
  Skeleton,
  Sticky,
  Swipe,
  SwipeItem,
  Tag,
  ActionSheet
} from 'vant'

// 引入图标
import 'vant/lib/icon/local.css'

// 基础组件
Vue.use(Button)
Vue.use(Cell).use(CellGroup)
Vue.use(Icon)
Vue.use(Image)
Vue.use(Col).use(Row)
Vue.use(Popup)
Vue.use(Toast)

// 表单组件
Vue.use(Calendar)
Vue.use(DatetimePicker)
Vue.use(Form)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Radio).use(RadioGroup)
Vue.use(Field)
Vue.use(Picker)
Vue.use(Search)

// 导航组件
Vue.use(Grid).use(GridItem)
Vue.use(IndexBar).use(IndexAnchor)
Vue.use(NavBar)
Vue.use(Pagination)
Vue.use(Sidebar).use(SidebarItem)
Vue.use(Tab).use(Tabs)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(TreeSelect)
Vue.use(Uploader)

// 反馈组件
Vue.use(Dialog)
Vue.use(DropdownMenu).use(DropdownItem)
Vue.use(Loading)
Vue.use(Notify)
Vue.use(Overlay)
Vue.use(PullRefresh)
Vue.use(SwipeCell)

// 展示组件
Vue.use(Collapse).use(CollapseItem)
Vue.use(Divider)
Vue.use(Empty)
Vue.use(ImagePreview)
Vue.use(Lazyload)
Vue.use(List)
Vue.use(Sticky)
Vue.use(NoticeBar)
Vue.use(Skeleton)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Tag)
Vue.use(ActionSheet)
