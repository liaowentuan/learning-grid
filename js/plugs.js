angular.module('tools',[]).directive('hello',['$compile',function ($compile) {
    return {
        restrict: 'A',
        require: 'ngModel', // 有该属性，link函数才有第四个值
        link: function (scope,el,attr,model) {
            console.log(this)
            if($compile){
                console.log(scope)
                console.log(el[0][attr.$attr.ngModel])
                console.log(attr.$attr.ngModel)
                if(!isNaN(model.$viewValue)){
                    console.log( '试图值' + model.$viewValue ,'model值' + model.$modelValue)
                }
            }
        }
    };
}]).directive('text',function(){
    return{
        restrict: 'E',
        replace: true,
        template : `<div>hello text</div>`
    }
});