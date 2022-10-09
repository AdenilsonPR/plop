Componentes serão criados no diretório src/views/components.
O teste unitario correspondente ao componente será criado no diretório tests/unit/components.

- Para criar um componente use o comando:

```
yarn generate component path name
```

Paginas serão criadas no diretorio src/views/pages.
O teste unitario correspondente a pagina será criado no diretório tests/unit/pages.

- Para criar uma pagina use o comando: 

```
yarn generate page path name
```

Organização dos diretórios:

```
> src
  > views
    > components
      > component01
        > component01.vue
      > component02
        > component02.vue
      index.js

    > page
      > page01
        > page01.vue
      > page02
        > page02.vue
      index.js

> tests
  > unit
    > components
      > component01
        > component01.spec.ts
      > component02
        > component02.spec.ts 
        
    > pages
      > page01
        > page01.spec.ts
      > page02
        > page02.spec.ts 
```

Para tornar a importação dos componentes e paginas mais facil é necessario resistra-los no arquivo index.js correspondente.

O teste unitário criado sempre dará falha é necessário que seja escrito um teste valido.