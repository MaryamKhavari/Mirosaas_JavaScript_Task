Vue.component("product", {
	template: `
	<div class="product">

		<div>
		<h3 class="text">
		How can we ensure AI systems remain aligned <br>
		with human values and ethics?
		</h3>
		<ul>
		<li v-for="item of reviews">
		<p class="text"> 
		{{item.name}}
		</p>
		<p class="text">
		{{item.msg}}
		</p>
		</li>
		</ul>
		</div>

		<div class="product-info">

		<button @click="addtocart" class="text">  Discussion </button>
	</div>
		<product-review @on-submitted="result" ></product-review>
    </div>
	`
	,
	data(){
		return{
			reviews:[]
		}
	}
	,
	
	methods:{
		addtocart(){
			this.$emit('add-to-cart')
		},
		result(productReview){
			this.reviews.push(productReview)
		}

	},
	computed: {
	}

})

Vue.component("product-review", {
	template:`
	<div>
	<p class="text">
		<p v-for="e of errors">{{e}}</p>
	</p>
	<form class="review-form" @submit.prevent="submitted">
		<p class="text">
		<input v-model="name" placeholder=" Your name"/>
		</p>
		
		<p class="text">
		<textarea v-model="msg" required placeholder=" Write a comment...">
		</textarea>
		</p>
		<p class="text">
		<input type="submit" value="Post Comment">
		</p>
	</form>
	</div>
	`,
	data(){
		return{
			name: null,
			msg: null,
			errors:[]
		}
	},
	methods:{
		submitted(){
			if(this.name && this.msg){
				let productReview={
					name: this.name,
					msg: this.msg
				}
				this.name=null;
				this.msg=null;
				this.$emit('on-submitted', productReview)
			}
			else{
				if(!this.name){
					this.errors.push("Name is required")
				}
				if(!this.msg){
					this.errors.push("Message is required")
				}
			}
			this.$emit('on-submitted', productReview)
		}
	}
})

const app = new Vue({
	el: "#app",
	data:{
		x: false,
		cart: 0
	},
	methods:{
		updateCart(){
			this.cart++;
		}
	}
	
})