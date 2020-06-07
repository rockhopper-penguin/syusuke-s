const profile = new Vue({
	el: '#profile-image',
	data: {
		imgName: "img/king_and_rockhopper.jpg"
	},
	methods: {
		imgMouseOver: function() {
			this.imgName = "img/king.jpg";
		},
		imgMouseRemove: function () {
			this.imgName = "img/king_and_rockhopper.jpg";
		}
	}
});