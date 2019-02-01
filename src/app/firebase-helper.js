import { map } from 'rxjs/operators';

export function fireHelper(payload) {
  return payload.snapshotChanges().pipe(
    map(actions => 
     actions.map(a => ({ key: a.key, ...a.payload.val() }))
    )
  )
}