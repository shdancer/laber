# 试剂模块

## 字段

| 名字     | 厂家     | 生产日期   | 纯度     | 库存     | 地点     | 类型               | 管制类型                                     | 应急处理 | 操作性(是否低于阈值)       | 阈值     |
| -------- | -------- | ---------- | -------- | -------- | -------- | ------------------ | -------------------------------------------- | -------- | -------------------------- | -------- |
| `string` | `string` | `datetime` | `number` | `number` | `string` | `"liquid"|"solid"` | `0|1|2` `0->normal` `1->dangerous` `2->safe` | `string` | `0|1` `1->can` `0->connot` | `number` |

## 接口

### 新增试剂 `POST {base}/api/reagent`

#### Request

```json
{
  "name": "string",
  "brand": "string",
  "date": "datetime",
  "purity": "number",
  "capacity": "number",
  "location": "string",
  "type": "liquid|solid",
  "control": "0|1|2",
  "solution": "string",
  "operation": "0|1",
  "limitation": "number"
}
```

#### Response

```json
{
  "success": true,
  "data": id
}

```



### 删除试剂 `DELETE {base}/api/reagent/:id`

#### Request

```json
none
```

#### Response

```json
{
  "success": true,
  "data": id
}
```

### 修改试剂 `PUT {base}/api/reagent`

#### Request

```json 
{ 
  "id": "number",
  "name": "string",
  "brand": "string",
  "date": "datetime",
  "purity": "number",
  "capacity": "number",
  "location": "string",
  "type": "liquid|solid",
  "control": "0|1|2",
  "solution": "string",
  "operation": "0|1",
  "limitation": "number"
}
```

#### Response

```json
{
  "success": true,
  "data": {
      "name": "string",
      "brand": "string",
      "date": "datetime",
      "purity": "number",
      "capacity": "number",
      "location": "string",
      "type": "liquid|solid",
      "control": "0|1|2",
      "solution": "string",
      "operation": "0|1",
      "limitation": "number"
  }
}
```

### 查询试剂 `GET {base}/api/reagent?name=string&limit=&page=`

#### Request

```json
none
```

#### Response

```json
{
  "success": true,
  "data": {
    "total": "number",
    "list": [
        {  
          "id": "number",  
          "name": "string",
          "brand": "string",
          "date": "datetime",
          "purity": "number",
          "capacity": "number",
          "location": "string",
          "type": "liquid|solid",
          "control": "0|1|2",
          "solution": "string",
          "operation": "0|1",
          "limitation": "number"  
        },
      ...
    ]
  }
}
```

### 查询余量低于阈值的试剂 ` GET {base}/api/reagent/limitation?limit=&page=`

#### Request

``` 
none
```

#### Response

```json
{
    "success":true,
    "data": {
        "total": "number",
        "list":[
           {  
              "id": "number",  
              "name": "string",
              "brand": "string",
              "date": "datetime",
              "purity": "number",
              "capacity": "number",
              "location": "string",
              "type": "liquid|solid",
              "control": "0|1|2",
              "solution": "string",
              "operation": "0|1",
              "limitation": "number"  
           },
            ...
        ]
    }
}
```





# 用户模块

## 字段

| 姓名     | 学号     | 密码     | 身份                            |
| -------- | -------- | -------- | ------------------------------- |
| `string` | `string` | `string` | `0|1` `1->teacher` `0->student` |

## 接口

### 登录 `POST {base}/api/user`

#### Request

```json
{
  "stuid": "string",
  "password": "string"
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "id": "number",
    "name": "string",
    "status": "0|1"
  }
}
```

### 登出 `DELETE {base}/api/user`

#### Request

```json
none
```

#### Response

```json
{
  "success": true
}
```

### 注册 `POST {base}/api/user/register`

#### Request

```json
{
  "name": "string",
  "stuid": "string",
  "password": "string"
}
```

#### Response

```json
{
  "success": true,
  "data": {
    "name": "string",
    "stuid": "string"
  }
}
```

### 处理注册审批 `PUT {base}/api/user/approve`

#### Request

```json
{
  "id": "number",
  "agree": "0|1"
}
```

#### Response

```json
{
  "success": true
}
```

### 获取注册审批 `GET {base}/api/user/approve?limit= &page=`

#### Request

```json
none
```

#### Response

```json
{
  "success": true,
  "data": {
    "total": "number",
    "list": [
      {
        "id":"number",
        "name":"string",
        "stuid":"string",
        "status":"number"
      },
      ...
    ]
  }
}
```



### 注销 `DELETE {base}/api/user/cancel/:id`

#### Request

```json
none
```

#### Response

```json
{
  "success": true
}
```



# 记录模块

## 字段

| 日期       | 操作人   | 类型                          | 操作量   | 试剂名称 | 同意                                               |
| ---------- | -------- | ----------------------------- | -------- | -------- | -------------------------------------------------- |
| `datetime` | `string` | `0|1` `0->export` `1->import` | `number` | `string` | `0|1|2` `0->not seen yet` `1->agree` `2->disagree` |

## 接口

### 出库 `POST {base}/api/record/export`

#### Request

```json
{ 
  "id": "number", //试剂id
  "date": "datetime",
  "name" : "string",
  "operator": "string",
  "quantity": "number"
}
```

#### Response

```json
{
  "success": true
}
```



### 入库 `POST {base}/api/record/import`

#### Request

```json
{ 
  "id":"number",
  "date": "datetime",
  "name" : "string",
  "operator": "string",
  "quantity": "number"
}
```

#### Response

```json
{
  "success": true
}
```



### 试剂名查询（综合查询） `GET {base}/api/record?name=`

#### Request

```json
none
```

#### Response

```json
{
  "success": true,
  "data": {
    "total": "number",
    "list": [
      ...
    ]
  }
  
}
```



### 综合查询 `GET {base}/api/record/type=import(1)|export(0)|both&name=string&[starttime=datetime&endtime=datetime]&[user=string]&limit= &page= `

#### Request

```json
none
```

#### Response

```json
{
  "success": true,
  "data": {
    "total": "number",
    "quantity": "number",
    "list": [
      {
        "id":"number",
        "date": "datetime",
        "name" : "string",
        "operator": "string",
        "quantity": "number",
        "type": 0|1,
        "appreove": 0|1|2   //
      },
       ... 
    ]
  }
}
```



### 获取操作审批 `GET {base}/api/record/operation?limit=&page=`

#### Request

```json
none
```

#### Response

```json
{
  "success": true,
  "data": {
    "total": "number",
    "quantity": "number",
    "list": [
        {
          "id":"number",
          "date": "datetime",
            "name" : "string",
            "operator": "string",
            "quantity": "number",
            "type": 0|1,
            "appreove": 0|1|2 
        },
      ...
    ]
  }
}
```



### 同意操作审批 `PUT {base}/api/record/operation`

#### Request

```
{
  "id": "number",
  "agree": "0|1"
}
```

```json
{
  "success": true,
  "approve": 1|2
}
```



