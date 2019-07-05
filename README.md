# Deployment

Deployment แบบต่างๆ ดูได้จาก <https://facebook.github.io/create-react-app/docs/deployment>

## ในที่นี่จะใช้ Github Pages

### Step 1: ติดตั้ง `gh-pages` ใน dev-dependency

```unix
npm install gh-pages --save-dev
```

### Step 2: แก้ไขไฟล์ `package.json`

```json
{
  // ...
  "homepage": "http://git-username.github.io/repo-name",
  "scripts": {
    //...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build" // ถ้าต้องการ deploy ไปที่ branch อื่น ใส่ -b branch-name ก่อน -d (default gh-pages)
  }
}
```

### Step 3: แก้ไขไฟล์ `src/index.js`

เพิ่ม basename ซึ่งตรงนี้ถ้าใช้จาก `process.env.PUBLIC_URL` จะไม่มีผลกับ development [เพิ่มเติม](https://medium.com/@svinkle/how-to-deploy-a-react-app-to-a-subdirectory-f694d46427c1)

```jsx
ReactDOM.render(
  <Router basename={`${process.env.PUBLIC_URL}`}>
    <Routes />
  </Router>,
  document.getElementById('root')
);
```

### Step 4: สร้าง empty repository ใน GitHub

### Step 5: สร้าง git repository ใน app's folder

```unix
$ git init
Initialized empty Git repository in C:/path/to/react-gh-pages/.git/
```

### Step 6: เพิ่ม git remote

```unix
$ git remote add origin https://github.com/gitname/react-gh-pages.git
```

### Step 7: delpoy ไป GitHub Pages

```unix
npm run deploy
```

ทดสอบไปที่ `http://git-username.github.io/repo-name`

**เรื่องก่อนหน้า** [Hooks](https://github.com/somprasongd/todo-react-app/tree/8-hooks)

**[หน้าแรก](https://github.com/somprasongd/todo-react-app)**
