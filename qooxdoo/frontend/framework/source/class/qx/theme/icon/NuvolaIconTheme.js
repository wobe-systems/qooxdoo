/* ************************************************************************

   qooxdoo - the new era of web development

   Copyright:
     2004-2006 by 1&1 Internet AG, Germany
     http://www.1und1.de | http://www.1and1.com
     All rights reserved

   License:
     LGPL 2.1: http://creativecommons.org/licenses/LGPL/2.1/

   Internet:
     * http://qooxdoo.org

   Authors:
     * Sebastian Werner (wpbasti)
       <sebastian dot werner at 1und1 dot de>
     * Andreas Ecker (ecker)
       <andreas dot ecker at 1und1 dot de>

************************************************************************ */

/* ************************************************************************

#module(iconthemes)
#require(qx.manager.object.SingletonManager)
#resource(images:icon/nuvola)

************************************************************************ */

qx.OO.defineClass("qx.theme.icon.NuvolaIconTheme", qx.renderer.theme.IconTheme,
function() {
  qx.renderer.theme.IconTheme.call(this, "Nuvola");
});




/*
---------------------------------------------------------------------------
  DEFAULT SETTINGS
---------------------------------------------------------------------------
*/

qx.Settings.setDefaultSetting("imageUri", "../../resources/icon/nuvola");




/*
---------------------------------------------------------------------------
  SINGLETON INSTANCE
---------------------------------------------------------------------------
*/

qx.manager.object.SingletonManager.add(qx.theme.icon, "NuvolaIconTheme");
