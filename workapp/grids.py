  class ExampleGrid(JqGrid):
        model = SomeFancyModel # could also be a queryset
        fields = ['id', 'name', 'desc'] # optional 
        url = reverse_lazy('grid_handler')
        caption = 'My First Grid' # optional
        colmodel_overrides = {
            'id': { 'editable': False, 'width':10 },
        }