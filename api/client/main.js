const loadInitialTemplate = ()=>{
    const template = `
    <h1>Usuarios</h1>
    <form id="form-user">
        <div>
            <label>Nombre</label>
            <input name="name" />
        </div>
        <div>
            <label>Apellido</label>
            <input name="lastname" />
        </div>
        <button type="submit">Agregar</button>
    </form>
    <ul id="user-list"></ul>
    `
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}

window.onload =()=>{

    loadInitialTemplate()


}