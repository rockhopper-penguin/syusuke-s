const skills = new Vue({
	el: '.skills',
	data: {
		skill: "Skills",
	},
	methods: {
		aws: function() {
			this.setSkill("AWS");
		},
		bootstrap: function() {
			this.setSkill("Bootstrap");
		},
		centos: function() {
			this.setSkill("CentOS");
		},
		css: function() {
			this.setSkill("CSS3");
		},
		js: function() {
			this.setSkill("JavaScript");
		},
		html: function() {
			this.setSkill("HTML5");
		},
		python: function() {
			this.setSkill("Python3");
		},
		ubuntu: function() {
			this.setSkill("Ubuntu");
		},
		vue: function() {
			this.setSkill("Vue.js");
		},
		wordpress: function() {
			this.setSkill("WordPress");
		},
		remove: function() {
			this.setSkill("Skills");
		},
		setSkill: function(input) {
			this.skill = input;
		}
	}
});