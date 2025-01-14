The solution involves using the `useOutletContext` hook to access the parameters from the parent route.  This way, the nested component can get the parameters even when it's not directly within a `<Route>` element.

```javascript
// Correct Usage
import { useParams, useOutletContext } from 'react-router-dom';

function ParentComponent() {
  return (
    <div>
      <Route path=':id' element={<ChildComponent/>}/>
    </div>
  );
}

function ChildComponent() {
  const params = useOutletContext();
  console.log(params);
  // Access params.id here
  return (
    <div>Child Component: {params?.id}</div>
  );
}
```

This corrected code uses `useOutletContext()` which gives access to the context from the parent route and correctly extracts the parameters.  Remember to adapt the `path` in the `<Route>` to your specific routing setup.