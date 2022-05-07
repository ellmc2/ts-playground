function alertName(): void {
    alert('My name is Tom');
}

//会报错 不能将类型“null”分配给类型“void”
let unusable2: void = null;
//不会报错
let unusable233: void = undefined;