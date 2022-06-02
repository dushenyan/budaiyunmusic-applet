import res from '../../utils/request'
Page({
  data: {
    VideoGroupList: null,
    budai: ""
  },
  onLoad: function (options) {
    this.getVideoGroupList();
  },
  async getVideoGroupList() {
    let VideoGroupList_One = await new res('/video/group/list')
    this.setData({
      VideoGroupList: VideoGroupList_One.data.slice(0, 14),
      budai: VideoGroupList_One.data[0].id
    })
  },
  changeNav(event) {
    let navId = event.currentTarget.id;
    this.setData({
      budai: navId * 1
    })
  }
})