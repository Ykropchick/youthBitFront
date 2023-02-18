<template>
  <div class="container d-flex justify-content-center">
    <div class="block">
     <div class="row">
       <div class="col"><h4>Тема:</h4></div>
       <div class="col">{{notification.name}}</div>
     </div>
      <div class="row">
        <div class="col"><h4>От:</h4></div>
        <div class="col">{{notification.from}}</div>
      </div>
      <div class="row">
        <div class="col"><h4>Получено:</h4></div>
        <div class="col">{{notification.date}}</div>
      </div>
      <div>
        {{notification.description}}
      </div>

    </div>
  </div>


</template>

<script>
export default {
  name: "NotificationView",
  data(){
    return{
      notification:{
        id: 0,
        name:"Hello",
        date:"12-02-03",
        from:"Vasya",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dignissimos eius harum labore minima nemo,\n" +
            "    numquam quae quidem reiciendis reprehenderit, saepe sunt. Corporis doloremque hic repellat reprehenderit veniam.\n" +
            "    Facilis, voluptatem!\n" +
            "  \n" +
            "  Consectetur libero neque nobis pariatur perferendis quidem sequi vel? Beatae commodi corporis dignissimos\n" +
            "    eligendi est, ex iste iure iusto laboriosam minima modi necessitatibus nihil nisi possimus quam repudiandae sit\n" +
            "    vitae.\n" +
            "  \n" +
            "  Alias, aliquam aperiam dicta doloremque dolores illum inventore libero magni molestias ratione, rerum, sunt?\n" +
            "    Accusamus consectetur, eos eum fugit harum id, itaque magnam non nulla obcaecati officia, temporibus vero voluptas.\n" +
            "  \n" +
            "  Eveniet hic molestias provident qui quo reiciendis tempora velit voluptas! Ab, aspernatur beatae cumque debitis\n" +
            "    dolore, eligendi esse et excepturi fugit laborum nemo nisi odit saepe vel vitae, voluptatem voluptates!"
      },
    }
  }
}
</script>

<style scoped>
.block{
  min-width: 50vw;
  min-height: 50vh;
  border: solid 2px black;
}
</style>