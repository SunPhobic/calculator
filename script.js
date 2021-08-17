(function(){
    let calculator = {
        resultStr : 0,
        init: function(){
            this.cacheDom()
            this.bindings()
        },
        cacheDom: function(){
            this.number = document.querySelectorAll('.number')
            this.operation = document.querySelectorAll('.operation')
            this.result = document.querySelector('#result')
            this.equal = document.querySelector('#equal')
            this.del = document.querySelector('#del')
            this.clear = document.querySelector('#clear')
            this.round = document.querySelector('#round')
        },

        bindings: function(){
            document.onkeydown = this.pressKey.bind(this)
            
            this.number.forEach(data=> {
                     data.addEventListener('click',this.addNumber.bind(this))
                })
            this.operation.forEach(data=> {
                    data.addEventListener('click',this.addOperation.bind(this))
                })
            this.equal.addEventListener('click', this.equalResult.bind(this))

            this.del.addEventListener('click',this.deleteRes.bind(this))

            this.clear.addEventListener('click',this.clearRes.bind(this))

            this.round.addEventListener('click',this.roundRes.bind(this))
        },
        addNumber: function(ev,key=null){
            if(this.result.innerText ==='Error'){this.clearRes()}
            (key===null)?this.result.innerText +=  ev.target.innerText : this.result.innerText += key
            
        },
        addOperation: function(ev,key=null){
            if(this.result.innerText ==='Error'){this.clearRes()}                
            (key===null)?this.result.innerText +=  ev.target.innerText : this.result.innerText += key   
            },
        equalResult: function(){
            try{
                this.resultStr = eval(this.result.innerText)
                this.result.innerText = this.resultStr.toString()
            }catch(err){this.result.innerHTML = 'Error';}                
        },
        deleteRes: function(){
            if(this.result.innerText ==='Error'){this.clearRes()}else{
            let newRes = this.result.innerText.slice(0,-1)
            this.result.innerText = newRes}
        },
        clearRes: function(){
            this.result.innerHTML = ''
        },
        roundRes: function(){
            if(this.result.innerText ==='Error'){this.clearRes()}else{
            this.resultStr = eval(this.result.innerText)
            this.result.innerText = parseInt(this.resultStr)}
        },
        pressKey: function(ev){
            if(parseInt(ev.key)>=0 && parseInt(ev.key)<10 || ev.key==='.'){
                this.addNumber(null,ev.key)
            }else if(ev.key == '/' || ev.key == '*' || ev.key == '-' || ev.key == '+'  ){
                ev.preventDefault()
                this.addOperation(null,ev.key)
            }else if(ev.key ==='Enter'){
                this.equalResult()
            }else if(ev.key === 'Backspace'){
                this.deleteRes()
            }
            
            
        } 
    }
    calculator.init()

})()

















