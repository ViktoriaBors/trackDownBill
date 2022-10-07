export default function crudBuilder(baseRoute) {
    function list(keyword) {
      return fetch(`${baseRoute}?keyword=${keyword}`);
    }
  
    function show(id) {
      return fetch(`${baseRoute}/${id}`);
    }
  
    function create(formValues) {
      return fetch(baseRoute, { method: "POST", body: formValues });
    }
  
    function update(id, formValues) {
      return fetch(`${baseRoute}/${id}`, { method: "PUT", body: formValues });
    }
  
    function remove(id) {
      return fetch(`${baseRoute}/${id}`, { method: "DELETE" });
    }
  
    return {
      list,
      show,
      create,
      update,
      remove
    }
  }

  // project overview routes
  const baseRoute = "http://localhost:8000/project"
  