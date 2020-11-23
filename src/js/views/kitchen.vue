<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-xl-3 position-fixed vh-100 overflow-auto">
            <p>
                Dolor laboris ad esse aute consectetur pariatur eiusmod laborum sunt. Sunt duis exercitation dolor voluptate consequat id eu proident ut culpa. Fugiat ullamco cupidatat enim pariatur aliquip enim laboris aliquip dolor id consectetur veniam. Cillum duis non deserunt in minim. Nostrud tempor eiusmod esse nostrud. Mollit labore voluptate magna officia qui laborum minim irure.
            </p>

            <p>
                Dolor laboris ad esse aute consectetur pariatur eiusmod laborum sunt. Sunt duis exercitation dolor voluptate consequat id eu proident ut culpa. Fugiat ullamco cupidatat enim pariatur aliquip enim laboris aliquip dolor id consectetur veniam. Cillum duis non deserunt in minim. Nostrud tempor eiusmod esse nostrud. Mollit labore voluptate magna officia qui laborum minim irure.
            </p>

            <p>
                Dolor laboris ad esse aute consectetur pariatur eiusmod laborum sunt. Sunt duis exercitation dolor voluptate consequat id eu proident ut culpa. Fugiat ullamco cupidatat enim pariatur aliquip enim laboris aliquip dolor id consectetur veniam. Cillum duis non deserunt in minim. Nostrud tempor eiusmod esse nostrud. Mollit labore voluptate magna officia qui laborum minim irure.
            </p>

            <p>
                Dolor laboris ad esse aute consectetur pariatur eiusmod laborum sunt. Sunt duis exercitation dolor voluptate consequat id eu proident ut culpa. Fugiat ullamco cupidatat enim pariatur aliquip enim laboris aliquip dolor id consectetur veniam. Cillum duis non deserunt in minim. Nostrud tempor eiusmod esse nostrud. Mollit labore voluptate magna officia qui laborum minim irure.
            </p>

            <p>
                Dolor laboris ad esse aute consectetur pariatur eiusmod laborum sunt. Sunt duis exercitation dolor voluptate consequat id eu proident ut culpa. Fugiat ullamco cupidatat enim pariatur aliquip enim laboris aliquip dolor id consectetur veniam. Cillum duis non deserunt in minim. Nostrud tempor eiusmod esse nostrud. Mollit labore voluptate magna officia qui laborum minim irure.
            </p>

            <p>
                Dolor laboris ad esse aute consectetur pariatur eiusmod laborum sunt. Sunt duis exercitation dolor voluptate consequat id eu proident ut culpa. Fugiat ullamco cupidatat enim pariatur aliquip enim laboris aliquip dolor id consectetur veniam. Cillum duis non deserunt in minim. Nostrud tempor eiusmod esse nostrud. Mollit labore voluptate magna officia qui laborum minim irure.
            </p>
        </div>

        <div class="col-xl-9 offset-xl-3">
            <div class="card mt-5">
                <div class="card-body">
                    <h2 class="card-title">
                        Ingredients
                    </h2>

                    <div class="card-body">
                        <button v-for="ingredient in ingredients"
                            class="d-inline-block btn btn-primary mx-1 my-2">
                            <img :src="ingredient.image" :alt="ingredient.name">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: mapState([
        'ingredients'
    ])
}
</script>