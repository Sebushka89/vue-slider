//In data inserire una lista di url di immagini.Nell’html visualizzare tutte queste immagini, una dopo l’altra.
Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            images :[
                'https://www.playstationzone.it/wp-content/uploads/2018/05/god-of-war-trofei.jpg',
                'https://dm2ue6l6q7ly2.cloudfront.net/wp-content/uploads/2020/06/27093655/the-last-of-us-scaled.jpg',
                'https://www.rinoadiary.it/grafica/header/header_ffx-normal.jpg',
                'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fbatman-arkham-asylum%2Fhome%2FEGS_WB_Batman_Arkham_Asylum_L1_2560x1440_19_0911-2560x1440-bdfb966b14e5f9bb6a2bf48a148d36566ca96df0.jpg'
            ],
            imageIndex: 0,
            intervallo: null,
        },
        created(){
            this.intervallo=setInterval(()=>{
                this.next();
            }, 3000)
        },
        methods:{
            next: function(){
                if (this.imageIndex ===(this.images.length - 1)){
                    this.imageIndex = 0;
                }else{
                    this.imageIndex++;
                };
                clearInterval(this.intervallo);
                this.intervallo=setInterval(()=>{
                    this.next();
                }, 3000)
            },
            prev: function(){
                if (this.imageIndex === 0){
                    this.imageIndex = (this.images.length - 1);
                }else{
                    this.imageIndex--;
                };
                clearInterval(this.intervallo);
                this.intervallo=setInterval(()=>{
                    this.next();
                }, 3000)
            },
            moveTo: function(index){
                this.imageIndex=index;
                clearInterval(this.intervallo);
                this.intervallo=setInterval(()=>{
                    this.next();
                }, 3000)
            },
            isCurrentPosition: function(index){
                if(index===this.imageIndex){
                    return 'current';
                }else{
                    return ''
                }
            }    
        },

    }
)        
        
    
        
    
