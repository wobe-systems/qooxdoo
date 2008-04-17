/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("demobrowser.demo.layout.ChildrenHandling_1",
{
  extend : qx.application.Standalone,

  members :
  {
    main: function()
    {
      this.base(arguments);

      var container = new qx.ui.core.Composite();
      var layout = new qx.ui.layout.VBox();
      layout.setSpacing(10);
      container.setLayout(layout);

      this._hbox = new qx.ui.core.Composite(new qx.ui.layout.HBox()).set({
        height : 100
      });

      this._widgets = [];
      var widgetColors = ["green", "blue", "yellow", "black", "orange", "red"];
      for (var i=0; i<widgetColors.length; i++)
      {
        var widget = new qx.ui.core.Widget();
        widget.setBackgroundColor(widgetColors[i]);
        this._hbox.add(widget);
        this._widgets.push(widget);
      }
      container.add(this._hbox);

      this._grid  = new qx.ui.core.Composite(new qx.ui.layout.Grid()).set({
        height : 100
      });

      this._gridWidgets = [];
      for (var i=0; i<widgetColors.length; i++)
      {
        var widget = new qx.ui.core.Widget();
        widget.setBackgroundColor(widgetColors[i]);
        this._grid.add(widget, {row: 0, column: i});
        this._gridWidgets.push(widget);
      }
      container.add(this._grid);

      var buttons = new qx.ui.core.Composite(new qx.ui.layout.HBox());

      for (var i=0; i<this._widgets.length; i++) {
        buttons.add(this.createRemoveButton(this._widgets[i], i));
      }

      container.add(buttons);

      this.getRoot().addMain(container);
    },

    createRemoveButton : function(widget, widgetIndex)
    {
      var doRemove = true;
      var button = new qx.ui.form.Button("Remove " + widget.getBackgroundColor());

      button.addListener("execute", function()
      {
        if (doRemove)
        {
          this._hbox.remove(widget);
          this._grid.remove(this._gridWidgets[widgetIndex]);
          button.setLabel("Add " + widget.getBackgroundColor());
        }
        else
        {
          this._hbox.add(widget);
          this._grid.add(this._gridWidgets[widgetIndex], {row: 0, column: widgetIndex});
          button.setLabel("Remove " + widget.getBackgroundColor());
        }

        doRemove = !doRemove;
      }, this);

      return button;
    }
  }
});
