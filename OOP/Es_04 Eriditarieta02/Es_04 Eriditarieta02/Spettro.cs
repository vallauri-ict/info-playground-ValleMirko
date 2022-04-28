using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Es_04_Eriditarieta02
{
    class Spettro : Mostro
    {
        private bool invincibile;
        public Spettro():base(30)
        {
            invincibile = true;
        }

        public Spettro(int p): base(p)
        {
            invincibile = true;
        }
    }
}
