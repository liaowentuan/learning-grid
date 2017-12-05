var app = angular.module('App',['ui.grid','ui.grid.selection','ui.grid.edit', 'ui.grid.exporter','ui.grid.pagination','ui.grid.resizeColumns','ui.grid.autoResize','tools']).controller('mainCtrl',['$scope','i18nService',function($scope,i18nService){
    // 国际化

    i18nService.setCurrentLang("zh-cn");
    $scope.showDialog = () =>{
        $.LstDialog(".monitorDialog2222",200)
    };
    $scope.test = () => {
        console.log("点击了1111");
    }
    $scope.num = 10;
    $scope.gridOptions = {
        LstPation : true, // 是否LST分页栏序列号一栏
        enableSorting: false, //是否排序
        useExternalSorting: false, //是否使用自定义排序规则
        enableGridMenu: false, //是否显示grid 菜单
        showGridFooter: true, //是否显示grid footer
        enableColumnMenus:false,
        enableHorizontalScrollbar : 0, //grid水平滚动条是否显示, 0-不显示  1-显示
        enableVerticalScrollbar : 1, //grid垂直滚动条是否显示, 0-不显示  1-显示
        enablePagination: true, //是否分页，默认为true
        enablePaginationControls: true, //使用默认的底部分页
        paginationPageSizes: [10, 15, 20,25,30,100], //每页显示个数可选项
        // paginationCurrentPage:1, //当前页码
        paginationPageSize: 10, //每页显示个数
        //paginationTemplate:"<div></div>", //自定义底部分页代码
        useExternalPagination: true,//是否使用分页按钮
        columnDefs: [{ field: 'name',
            displayName: '名字',
            enableHiding: false,
            suppressRemoveSort: true,
            enableCellEdit: false, // 是否可编辑
            width:100,
            cellTooltip:'meme'
        },
            { field: "age",width:60, cellTooltip:'meme'},
            { field: "birthday"},
            { field: "salary"}
        ],
        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            //分页按钮事件
            gridApi.pagination.on.paginationChanged($scope,function(newPage, pageSize) {
                console.log(newPage,pageSize)
                getData(newPage,pageSize);
                
                $scope.pageSize = pageSize
            });

            //行选中事件
            $scope.gridApi.selection.on.rowSelectionChanged($scope,function(row){
                var a  =  $scope.gridApi.selection.getSelectAllState();
                //调用这个方法可以判断是否全选，返回正则类型
                /*if((gridApi.selection.getSelectedGridRows()).length!=0){
                    console.log(gridApi.selection.getSelectedGridRows()) // 获取选取对象
                    $scope.row = row
                }else{
                    $scope.row = null;
                }*/
                $scope.gridApi.grid
                    $scope.selectRowsItem = $scope.gridApi.selection.getSelectedGridRows()
                console.log($scope.selectRowsItem )

            });
            //全选行事件
            gridApi.selection.on.rowSelectionChangedBatch($scope,function(rows){
                /*if(gridApi.grid.selection.selectAll==false){  // 第一种方法
                    console.log(rows)
                }*/
                if(!$scope.gridApi.selection.getSelectAllState()){  // 第二种方法
                    $scope.selectRowsItem = $scope.gridApi.selection.getSelectedGridRows()
                    console.log($scope.selectRowsItem)
                }
            })
        }
    };
    function getData(num,index = 10) {
        let data = [];
        for(let i =0 ;i<index ;i++){
            data[i] = {name:'wentuan'+index,age:i,birthday:'2017-12-10',salary:'X000'}
        }
        $scope.gridOptions.data = data;
        $scope.gridOptions.paginationCurrentPage = num;
        $scope.gridOptions.totalItems =71 // 总数量
    }
    getData(1);
}]);